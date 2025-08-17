import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './LatestArticles.css';

const posts = [
  {
    id: 1,
    date: 'December 04, 2022',
    title: 'New Bertram 570 Convertible for Sales',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.',
    img: 'https://placehold.co/640x360?text=Article+1',
    href: '/',
  },
  {
    id: 2,
    date: 'November 25, 2022',
    title: 'Your Guide to the Best New Marine Tech',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.',
    img: 'https://placehold.co/640x360?text=Article+2',
    href: '/',
  },
  {
    id: 3,
    date: 'November 05, 2022',
    title: 'Sea Ray Introduces the New SLX 260ss',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.',
    img: 'https://placehold.co/640x360?text=Article+3',
    href: '/',
  },
];

const ArticleCard = ({ post }) => (
  <div className="col-12 col-md-6 col-lg-4">
    <article className="card article-card border-0 shadow-sm h-100 rounded-4 overflow-hidden">
      <img src={post.img} className="card-img-top" alt={post.title} />
      <div className="card-body">
        <div className="text-uppercase small fw-semibold text-warning mb-2">{post.date}</div>
        <h5 className="card-title fw-semibold">{post.title}</h5>
        <p className="card-text text-muted mb-3">{post.excerpt}</p>

        <a href={post.href} className="article-link">
          Read more <FontAwesomeIcon icon={faArrowRight} className="ms-1" />
        </a>
      </div>
    </article>
  </div>
);

const LatestArticles = () => {
  return (
    <section className="latest-articles container my-5">
      {/* Eyebrow + Title */}
      <div className="text-center mb-4">
        <div className="latest-eyebrow text-uppercase small fw-semibold text-secondary mb-2">
          <span>News & Blog</span>
        </div>
        <h2 className="display-6 fw-semibold">Latest Articles</h2>
      </div>

      {/* Cards */}
      <div className="row g-4">
        {posts.map((p) => (
          <ArticleCard key={p.id} post={p} />
        ))}
      </div>

      {/* Load more */}
      <div className="text-center mt-4">
        <button className="btn btn-outline-secondary px-4">Load more</button>
      </div>
    </section>
  );
};

export default LatestArticles;
