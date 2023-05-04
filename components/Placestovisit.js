

export default function Placestovisit({ data }) {

  return (
    <>
<section className="section-destination section-block bg-white section-slide">
      <div className="container">
        <div className="section-title title-level-1 title-wrap mb-4">
          <h2 className="font-primary">Places to visit</h2>
          <p className="font-secondary mb-0">
            Discover Tamil Nadu's unique destinations - from UNESCO World Heritage Sites to soothing beaches and hill stations.
          </p>
        </div>

        <div className="card-wrapper position-relative">
          <div className="destination-slide section-slide-wrap slick-initialized slick-slider">
            <button
              className="slick-prev slick-arrow slick-disabled"
              aria-label="Previous"
              type="button"
              aria-disabled="true"
              style={{}}
            >
              Previous
            </button>
            <div className="slick-list draggable" style={{ padding: '0px' }}>
              <div
                className="slick-track"
                style={{ opacity: 1, width: '2030px', transform: 'translate3d(0px, 0px, 0px)' }}
              >                
                { /*<div className="slick-slide slick-current slick-center" data-slick-index="0" aria-hidden="true" style={{ width: '406px' }}> */ }

    <div className="slick-slide" aria-hidden="true" tabIndex="-1" style={{ width: '406px' }}>
    <section>
      <div className="item slide-item position-relative" style={{ width: '100%', display: 'inline-block' }}>
        <div className="img-wrap img-wrap3">
          <a href={href} target="_self" className="text-decoration-none d-block image-overlay-block position-relative" tabIndex="-1">
            <img loading="lazy" src={imgSrc} className="w-100" alt={title} title={title} />
          </a>
        </div>
        <div className="card-body position-absolute">
          <h3 className="card-title font-primary text-white">
            <a href={href} target="_self" className="text-decoration-none text-white hover-color-theme" tabIndex="-1">
              {title}
            </a>
          </h3>
          <p className="line-2 font-secondary mb-2 text-white">{description}</p>
          <a href={href} target="_self" className="btn-explore btn-explore-white text-decoration-none position-relative icon-white-wrap" tabIndex="-1">
            Read More
          </a>
        </div>
      </div>
    </section>
  </div>      
      
      </div></div><button class="slick-next slick-arrow" aria-label="Next" type="button" style="" aria-disabled="false">Next</button></div>
            <div class="btn-wrap text-end position-absolute">
                <a href="https://www.tamilnadutourism.tn.gov.in/destinations/where-to-go" class="btn-explore text-decoration-none position-relative icon-yellow-wrap font-16">Explore</a>
            </div>
        </div>
    </div>
</section>
    </>
  );
}
