import { articleData } from '../../data/articleData';
import ArticleHeader from './ArticleHeader';
import ArticleBody from './ArticleBody';
import UnderwritingBadge from '../../components/UnderwritingBadge/UnderwritingBadge';
import AdBox from '../../components/AdBox/AdBox';
import ShareBar from '../../components/ShareBar/ShareBar';
import Comments from '../../components/Comments/Comments';
import MoreStories from '../../components/MoreStories/MoreStories';
import styles from './ArticlePage.module.css';

const ArticlePage = () => {
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
    paragraphs,
    comments,
    moreStories,
  } = articleData;

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

        <ArticleBody paragraphs={paragraphs} />

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

export default ArticlePage;
