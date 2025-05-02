import { NextRequest, NextResponse } from 'next/server';

// Load environment variables
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-03';
const token = process.env.NEXT_PUBLIC_SANITY_API_TOKEN;

const query = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  mainImage,
  publishedAt,
  "author": author->{name, image},
  "categories": categories[]->{title},
  "excerpt": array::join(string::split(pt::text(body), "")[0..255], "") + "...",
  seo{
    _type,
    metaTitle,
    nofollowAttributes,
    seoKeywords,
    metaDescription,
    openGraph{
      _type,
      siteName,
      url,
      description,
      title,
      image{
        _type,
        crop{_type, right, top, left, bottom},
        hotspot{_type, x, y, height, width},
        asset->{...}
      }
    },
    twitter{
      _type,
      site,
      creator,
      cardType,
      handle
    },
    additionalMetaTags[]{
      _type,
      metaAttributes[]{
        _type,
        attributeValueString,
        attributeType,
        attributeKey,
        attributeValueImage{
          _type,
          crop{_type, right, top, left, bottom},
          hotspot{_type, x, y, height, width},
          asset->{...}
        }
      }
    }
  }
}`;

export async function GET(req: NextRequest) {
  if (!projectId || !token) {
    return NextResponse.json({ error: 'Sanity credentials are missing' }, { status: 500 });
  }

  const url = `https://${projectId}.apicdn.sanity.io/v${apiVersion}/data/query/${dataset}?query=${encodeURIComponent(query)}&returnQuery=false`;

  try {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!res.ok) {
      return NextResponse.json({ error: 'Failed to fetch Sanity data', details: await res.text() }, { status: res.status });
    }
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Server error', details: error instanceof Error ? error.message : error }, { status: 500 });
  }
}
