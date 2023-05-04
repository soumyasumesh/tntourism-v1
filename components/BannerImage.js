export default function BannerImage({ imageInfo }) {
  return (
    <>
      <div
        data-bs-interval="2000"
        data-ride="carousel"
        className={`carousel-item item ${imageInfo.active}`}
      >
        <div className="img-wrap-banner overflow-hidden">
          <div className="bannerstyle">
            <img
              srcSet="/images/pages/tablet/the-astonishing-falls-of-dharmapuri-1658836361_cd6bc946fcc6513a51c1.webp 1024w, /images/pages/medium-desktop/the-astonishing-falls-of-dharmapuri-1658836361_cd6bc946fcc6513a51c1.webp 1366w, /images/pages/large-desktop/the-astonishing-falls-of-dharmapuri-1658836361_cd6bc946fcc6513a51c1.webp 1920w"
              sizes="100w"
              src="/images/pages/mobile/the-astonishing-falls-of-dharmapuri-1660144186_fe8d3b544ca6ba07d5ca.webp"
              alt="The astonishing falls of Dharmapuri"
              title="The astonishing falls of Dharmapuri"
              width="100%"
              loading="lazy"
              height="100%"
            />
          </div>
        </div>
        <div className="carousel-caption desc">
          <h2 className="font-primary">{imageInfo.heading}</h2>
          <p className="font-secondary mb-3 d-lg-block d-md-block d-sm-none d-none">
            {imageInfo.short_description}...
          </p>
          <div className="col-12 d-flex justify-content-start">
            <a
              href={imageInfo.page_url}
              target="_self"
              className="theme-btn border-0 text-dark font-secondary text-decoration-none"
            >
              {imageInfo.more_button_text}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
