export default function Library() {
  return (
    <div>
      <div className="flex flex-1 flex-col gap-4 p-4">
        Your Library
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="aspect-video rounded-xl bg-muted/50 border" />
          <div className="aspect-video rounded-xl bg-muted/50 border" />
          <div className="aspect-video rounded-xl bg-muted/50 border" />
        </div>
        <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
      </div>
    </div>
  );
}
