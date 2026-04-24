export default function CreativeServices() {
  return (
    <section className="creative-section reveal">
      <div className="creative-inner">

        {/* Cinematic Videos & Fotos */}
        <div className="creative-row">
          <div className="creative-media">
            <video
              autoPlay
              muted
              loop
              playsInline
              poster="/images/samuraihakama.png"
            >
              <source src="/images/cinematic-video.mp4" type="video/mp4" />
            </video>
          </div>
          <div>
            <div className="creative-num">
              <span>07</span> · VISUELL
            </div>
            <h2 className="creative-h2">Cinematic Videos &amp; Fotos</h2>
            <p className="creative-p">
              Hochwertige Produktfotografie und Cinematic Videoproduktion für Social Media, Websites und Kampagnen.
              Professionelle Beleuchtung, Color Grading und Storytelling, das deine Marke zum Leben erweckt.
            </p>
          </div>
        </div>

        {/* Corporate Identity */}
        <div className="creative-row">
          <div>
            <div className="creative-num">
              <span>08</span> · IDENTITÄT
            </div>
            <h2 className="creative-h2">Corporate Identity</h2>
            <p className="creative-p">
              Logos, Brandbooks, Visitenkarten, Flyer und Social-Media-Design — eine vollständige Identität,
              die deine Marke unvergesslich macht. Konsistentes Branding vom Icon bis zur Kampagne.
            </p>
          </div>
          <div className="creative-media">
            <img src="/images/corporate-identity.jpg" alt="Corporate Identity" />
          </div>
        </div>

      </div>
    </section>
  );
}
