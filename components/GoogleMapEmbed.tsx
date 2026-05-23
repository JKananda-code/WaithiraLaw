export function GoogleMapEmbed() {
  return (
    <div className="aspect-[16/9] w-full overflow-hidden rounded-xl border border-slate-200">
      <iframe
        title="Office location"
        src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE_HERE"
        width="100%"
        height="100%"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-full w-full border-0"
      />
    </div>
  );
}
