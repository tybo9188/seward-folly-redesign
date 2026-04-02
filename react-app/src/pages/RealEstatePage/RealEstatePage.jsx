import { realEstateData } from '../../data/realEstateData';
import ArticleHeader from '../ArticlePage/ArticleHeader';
import UnderwritingBadge from '../../components/UnderwritingBadge/UnderwritingBadge';
import AdBox from '../../components/AdBox/AdBox';
import ShareBar from '../../components/ShareBar/ShareBar';
import Comments from '../../components/Comments/Comments';
import MoreStories from '../../components/MoreStories/MoreStories';
import ListingCard from './ListingCard';
import CTAForm from './CTAForm';
import styles from './RealEstatePage.module.css';

const RealEstatePage = () => {
  const {
    category,
    categoryHref,
    headline,
    excerpt,
    author,
    date,
    dateISO,
    featuredImageGradient,
    featuredImageCaption,
    sponsor,
    introParagraphs,
    listingSections,
    comments,
    moreStories,
  } = realEstateData;

  return (
    <div className={`container ${styles.articleLayout}`}>
      <div className={styles.articleMainCol}>
        <ArticleHeader
          category={category}
          categoryHref={categoryHref}
          headline={headline}
          excerpt={excerpt}
          author={author}
          date={date}
          dateISO={dateISO}
        />

        <UnderwritingBadge sponsor={sponsor} variant="article" />

        <figure className={styles.articleFeaturedImg}>
          <div
            className={styles.articleFeaturedImgPlaceholder}
            style={{ background: featuredImageGradient }}
          />
          <figcaption>{featuredImageCaption}</figcaption>
        </figure>

        <div className={styles.articleBody}>
          {introParagraphs.map((html, idx) => (
            <p key={idx} dangerouslySetInnerHTML={{ __html: html }} />
          ))}
        </div>

        {/* CTA banner */}
        <div className={styles.reCtaBanner}>
          <p>Thinking about buying or selling? Tell us what you need.</p>
          <a href="#cta-form" className={styles.btnCta}>Tell us</a>
        </div>

        {/* Listing sections */}
        {listingSections.map((section) => (
          <div key={section.id}>
            <h2 className={styles.reSectionHeading}>{section.title}</h2>

            {section.listings && section.listings.length > 0 ? (
              section.listings.map((listing, idx) => (
                <ListingCard
                  key={idx}
                  address={listing.address}
                  city={listing.city}
                  gradient={listing.gradient}
                  stats={listing.stats}
                  facts={listing.facts}
                  agent={listing.agent}
                  brokerage={listing.brokerage}
                />
              ))
            ) : (
              <p className={styles.reEmpty}>
                {section.emptyMessage || 'No listings available.'}
              </p>
            )}
          </div>
        ))}

        {/* CTA form */}
        <div id="cta-form">
          <CTAForm />
        </div>

        <ShareBar />

        <Comments comments={comments} />

        <MoreStories
          heading={moreStories.heading}
          stories={moreStories.stories}
        />
      </div>

      <aside className={styles.sidebarAdZone}>
        <AdBox width={300} height={300} sticky />
      </aside>
    </div>
  );
};

export default RealEstatePage;
