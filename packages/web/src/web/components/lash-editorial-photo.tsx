export function LashEditorialPhoto() {
  return <div className="lash-editorial">
    <svg width="0" height="0" className="heart-clip-definition" aria-hidden="true">
      <defs><clipPath id="editorial-heart" clipPathUnits="objectBoundingBox">
        <path d="M .5 .19 C .29 -.04 .02 .035 .02 .29 C .02 .52 .27 .76 .5 .97 C .73 .76 .98 .52 .98 .29 C .98 .035 .71 -.04 .5 .19 Z" />
      </clipPath></defs>
    </svg>
    <div className="lash-editorial__frame">
      <img className="lash-editorial__photo" src="/images/lash-editorial-new.webp" alt="Detalhe de extensão de cílios e sobrancelha" loading="lazy" />
      <div className="lash-editorial__tint" aria-hidden="true" />
      <svg className="lash-editorial__heart-edge" viewBox="0 0 1000 1000" preserveAspectRatio="none" aria-hidden="true">
        <path d="M 500 190 C 290 -40 20 35 20 290 C 20 520 270 760 500 970 C 730 760 980 520 980 290 C 980 35 710 -40 500 190 Z" fill="none" stroke="#fff1fa" strokeWidth="1.4" vectorEffect="non-scaling-stroke" />
      </svg>
    </div>
    <div className="lash-editorial__tools" aria-hidden="true">
      <img className="lash-editorial__tweezers" src="/images/tweezers-3d.png" alt="" loading="lazy" />
      <img className="lash-editorial__spoolie" src="/images/spoolie-3d.png" alt="" loading="lazy" />
      <img className="lash-editorial__lash" src="/images/lash-3d.png" alt="" loading="lazy" />
      <span className="editorial-spark editorial-spark--one" />
      <span className="editorial-spark editorial-spark--two" />
      <span className="editorial-spark editorial-spark--three" />
      <span className="editorial-spark editorial-spark--four" />
    </div>
  </div>;
}