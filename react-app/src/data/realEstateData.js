export const realEstateData = {
  category: 'Housing',
  categoryHref: '#',
  headline: 'Homes for sale in Seward right now',
  excerpt: 'There are currently 17 properties listed for sale in Seward. Here are the active listings, what they cost, and what to know before you buy.',
  author: 'The Seward Folly Staff',
  date: 'March 26, 2026',
  dateISO: '2026-03-26',
  featuredImageGradient: 'linear-gradient(135deg, #2c5364 0%, #203a43 50%, #0f2027 100%)',
  featuredImageCaption: 'Seward, Alaska — Photo by The Seward Folly',
  sponsor: 'Your Business Name',
  introParagraphs: [
    'There are currently <strong>17 properties</strong> listed for sale in Seward — 8 single-family homes, 6 multi-family properties, and 3 land parcels. The average asking price is <strong>$354,764</strong>, up about 2% from a year ago. Inventory remains limited.',
    'Below are selected active listings. Prices, details, and availability are current as of publication but may change. Contact the listing agent for the latest information.',
    "If you're thinking about buying or selling in Seward, scroll to the bottom of this page to tell us what you're looking for. We're exploring how The Folly can be helpful to buyers and sellers.",
  ],
  listingSections: [
    {
      title: 'Single-family homes',
      id: 'single-family',
      listings: [
        {
          address: '10411 Bearpaw Dr',
          city: 'Seward, AK 99664',
          gradient: 'linear-gradient(135deg, #355c3a 0%, #1a3a1d 100%)',
          stats: [
            { value: '$1,400,000', label: 'List price', highlight: true },
            { value: '~$8,032/mo', label: 'Est. payment', highlight: true },
            { value: '4', label: 'Beds' },
            { value: '5', label: 'Baths' },
            { value: '3,320', label: 'Sq ft' },
            { value: '0.94', label: 'Acres' },
          ],
          facts: [
            'Hand-built log home on just under 1 acre',
            'Main house: 3 bedrooms + flex room, 2 full baths, covered hot tub deck, 2-car garage',
            'Separate duplex with 2 rental units; additional storage shed',
          ],
          agent: 'Ristine Casagranda',
          brokerage: 'Coastal Heritage Properties',
        },
      ],
    },
    {
      title: 'Multi-family',
      id: 'multi-family',
      listings: [
        {
          address: '1105 Second Ave',
          city: 'Seward, AK 99664',
          gradient: 'linear-gradient(135deg, #3a4f6f 0%, #1e2d45 100%)',
          stats: [
            { value: '$630,000', label: 'List price', highlight: true },
            { value: '~$3,635/mo', label: 'Est. payment', highlight: true },
            { value: '5', label: 'Beds' },
            { value: '3', label: 'Baths' },
            { value: '2,536', label: 'Sq ft' },
            { value: '0.14', label: 'Acres' },
          ],
          facts: [
            'Triplex steps from the Seward Boat Harbor and Two Lakes Park',
            'Two units occupied by long-term tenants; upper unit vacant and move-in ready',
            'Upper unit furnished; eligible for short-term rental',
          ],
          agent: 'Ristine Casagranda',
          brokerage: 'Coastal Heritage Properties',
        },
      ],
    },
    {
      title: 'Land',
      id: 'land',
      listings: [],
      emptyMessage: "No land parcels in this week's update.",
    },
  ],
  comments: [
    { id: 1, avatar: 'R', author: 'Rachel', date: 'March 26, 2026', body: "This is really helpful — I've been keeping an eye on the Seward market and it's great to have everything in one place. Would love to see this updated weekly!" },
  ],
  moreStories: {
    heading: 'More from Housing',
    stories: [
      { category: 'Housing', title: 'Seward rental vacancy rate hits new low as summer season approaches', meta: 'March 24, 2026', gradient: 'linear-gradient(135deg, #2c5364 0%, #203a43 50%, #0f2027 100%)' },
      { category: 'Housing', title: 'City Council weighs short-term rental regulations for downtown', meta: 'March 20, 2026', gradient: 'linear-gradient(135deg, #1a2980 0%, #26d0ce 100%)' },
      { category: 'Housing', title: 'New affordable housing project breaks ground on Railway Avenue', meta: 'March 14, 2026', gradient: 'linear-gradient(135deg, #3a6186 0%, #89253e 100%)' },
    ],
  },
};
