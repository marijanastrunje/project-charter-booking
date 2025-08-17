import { useMemo, useState } from 'react';
import { boats } from '../../../data/data';
import BoatCard from './BoatCard';

const BoatCardsFilterGrid = () => {
  const [sort, setSort] = useState('price-asc');
  const [visibleCount, setVisibleCount] = useState(4); // 👈 start s 4

  const sortedBoats = useMemo(() => {
    const list = [...boats];
    switch (sort) {
      case 'price-asc':
        return list.sort((a, b) => (a.price ?? 0) - (b.price ?? 0));
      case 'price-desc':
        return list.sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
      case 'name-asc':
        return list.sort((a, b) =>
          `${a.brand ?? ''} ${a.name ?? ''}`.localeCompare(`${b.brand ?? ''} ${b.name ?? ''}`)
        );
      default:
        return list;
    }
  }, [sort]);

  return (
    <section className="container my-5">
      {/* Top bar */}
      <div className="d-flex align-items-center justify-content-between border-bottom pb-3 mb-4">
        <div className="text-muted small">
          <span className="fw-semibold text-body">{sortedBoats.length}</span> Yachts available at
          your search criteria
        </div>

        <div className="d-flex align-items-center gap-2">
          <span className="text-muted small text-nowrap">Sort by</span>
          <div className="input-group input-group-sm" style={{ maxWidth: 240 }}>
            <span className="input-group-text bg-white">Price:</span>
            <select className="form-select" value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="price-asc">Low - High</option>
              <option value="price-desc">High - Low</option>
              <option value="name-asc">Name A - Z</option>
            </select>
          </div>
        </div>
      </div>

      {/* Grid – prikaz samo prvih `visibleCount` */}
      <div className="row g-4">
        {sortedBoats.slice(0, visibleCount).map((b) => (
          <div key={b.id} className="col-12 col-md-6 col-lg-4 col-xl-3">
            <BoatCard boat={b} />
          </div>
        ))}
      </div>

      {/* Load more – pojavi se dok ima još za prikazati */}
      {visibleCount < sortedBoats.length && (
        <div className="text-center mt-4">
          <button
            className="btn btn-outline-secondary px-4"
            onClick={() => setVisibleCount((c) => Math.min(c + 4, sortedBoats.length))}
          >
            Load more
          </button>
        </div>
      )}
    </section>
  );
};

export default BoatCardsFilterGrid;
