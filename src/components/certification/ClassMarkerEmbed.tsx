/**
 * Option B — ClassMarker embedded on a CertRamp page.
 *
 * The iframe loads the ClassMarker test URL configured for the certification.
 * Loading is lazy and the frame is sized for a full test-taking experience.
 * Nothing loads until the page is opened, so marketing pages stay fast.
 *
 * Privacy note: embedding a third-party service transfers data to that provider.
 * Mention ClassMarker in your privacy policy (see /legal/privacy).
 */
export function ClassMarkerEmbed({ src, title }: { src: string; title: string }) {
  return (
    <div className="overflow-hidden rounded-[var(--radius-card)] border border-line bg-white shadow-[var(--shadow-card)]">
      <iframe
        src={src}
        title={title}
        loading="lazy"
        className="block h-[80vh] min-h-[640px] w-full"
        allow="fullscreen"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}
