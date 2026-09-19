import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { BedDouble, Bus, Coffee, ConciergeBell, MapPin, Maximize2, ScrollText, UtensilsCrossed, X } from "lucide-react";
import logoAsset from "@/assets/hotel-logo.png.asset.json";
import lunchAsset from "@/assets/lunch-menu.jpg.asset.json";
import dinnerAsset from "@/assets/dinner-menu.jpg.asset.json";
import cafeAsset from "@/assets/cafe-menu.jpeg.asset.json";
import memorialAsset from "@/assets/hotel-memorial.jpeg.asset.json";
import guideAsset from "@/assets/guest-guide.jpeg.asset.json";
import noticeAsset from "@/assets/hotel-notice.jpeg.asset.json";
import lobbyImage from "@/assets/talaeeyeh-lobby.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "راهنمای مهمان | هتل طلائیه" },
      { name: "description", content: "معرفی هتل طلائیه، برنامه غذایی، منوی کافی‌شاپ، سرویس‌ها و راهنمای اقامت" },
      { property: "og:title", content: "راهنمای مهمان هتل طلائیه" },
      { property: "og:description", content: "همه اطلاعات مورد نیاز اقامت شما در هتل طلائیه" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const quickLinks = [
  { id: "restaurant", label: "رستوران", sub: "برنامه و منوی غذا", icon: UtensilsCrossed },
  { id: "cafe", label: "کافی‌شاپ", sub: "نوشیدنی و دسر", icon: Coffee },
  { id: "shuttle", label: "سرویس رفت‌وآمد", sub: "ساعت حرکت", icon: Bus },
  { id: "spaces", label: "فضاهای هتل", sub: "امکانات اقامت", icon: BedDouble },
];

const schedules = [
  ["صبحانه", "۷:۰۰ تا ۹:۳۰", "رستوران هتل"],
  ["ناهار", "۱۲:۳۰ تا ۱۴:۳۰", "رستوران هتل"],
  ["شام", "۱۹:۳۰ تا ۲۱:۳۰", "رستوران هتل"],
];

function Index() {
  const [preview, setPreview] = useState<{ src: string; alt: string } | null>(null);

  return (
    <main className="min-h-screen bg-background pb-24 text-foreground md:pb-0">
      <div className="welcome-screen fixed inset-0 z-50 overflow-hidden bg-ink px-6 text-primary-foreground">
        <img src={lobbyImage} alt="لابی هتل طلائیه" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/75 to-primary/90" />
        <div className="absolute inset-5 border border-gold/40 md:inset-8" />
        <div className="absolute inset-8 border border-gold/15 md:inset-12" />
        <div className="relative flex h-full flex-col items-center justify-center text-center">
          <div className="ornamental-line mb-8 flex w-full max-w-sm items-center gap-3"><span className="h-px flex-1 bg-gold/70"/><span className="size-2 rotate-45 border border-gold"/><span className="h-px flex-1 bg-gold/70"/></div>
          <div className="welcome-logo flex flex-col items-center">
            <div className="flex size-36 items-center justify-center rounded-full border border-gold/50 bg-primary-foreground/5 backdrop-blur-sm md:size-48"><img src={logoAsset.url} alt="نشان هتل طلائیه" className="h-28 w-28 object-contain md:h-40 md:w-40" /></div>
            <p className="mt-8 text-sm font-light text-gold md:text-base">به خانه دوم خود خوش آمدید</p>
            <h1 className="mt-2 font-display text-4xl md:text-6xl">هتل طلائیه</h1>
            <p className="mt-3 text-xs tracking-[.18em] text-primary-foreground/65">HOTEL TALAE EYEH</p>
          </div>
          <div className="mt-10 h-px w-44 overflow-hidden bg-primary-foreground/20"><div className="welcome-progress h-full bg-gold" /></div>
          <span className="mt-3 text-[10px] text-primary-foreground/50">لحظاتی تا آغاز تجربه شما</span>
        </div>
      </div>

      <header className="sticky top-0 z-30 border-b border-border bg-background/90 text-foreground shadow-sm backdrop-blur-xl">
        <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5">
          <a href="#top" className="flex items-center gap-3" aria-label="صفحه اصلی هتل طلائیه">
            <img src={logoAsset.url} alt="" className="h-12 w-12 object-contain" />
            <div><strong className="block font-display text-xl leading-5">هتل طلائیه</strong><span className="text-[11px] text-secondary">راهنمای مهمان</span></div>
          </a>
          <nav className="hidden items-center gap-7 text-sm md:flex" aria-label="منوی اصلی">
            <a href="#restaurant" className="transition-colors hover:text-secondary">رستوران</a>
            <a href="#cafe" className="transition-colors hover:text-secondary">کافی‌شاپ</a>
            <a href="#shuttle" className="transition-colors hover:text-secondary">سرویس‌ها</a>
            <a href="#guide" className="transition-colors hover:text-secondary">راهنمای اقامت</a>
          </nav>
        </div>
      </header>

      <section id="top" className="relative min-h-[620px] overflow-hidden md:min-h-[700px]">
        <img src={lobbyImage} width={1536} height={1024} alt="فضای گرم و آرام لابی هتل طلائیه" className="absolute inset-0 h-[72%] w-full object-cover md:h-full" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/25 via-transparent to-background md:bg-gradient-to-r md:from-background/95 md:via-background/55 md:to-transparent" />
        <div className="hero-reveal relative mx-auto flex min-h-[620px] max-w-6xl flex-col items-center justify-end px-6 pb-12 text-center md:min-h-[700px] md:items-start md:justify-center md:pb-0 md:text-right">
          <div className="mb-5 flex items-center gap-3 text-secondary"><span className="h-px w-10 bg-secondary"/><span className="text-xs font-bold">میزبانی به رسم اصالت</span></div>
          <h1 className="max-w-xl font-display text-5xl leading-[1.15] text-foreground md:text-7xl">هتل طلائیه؛<br/>خانه آرامش شما</h1>
          <p className="mt-5 max-w-md text-sm leading-8 text-muted-foreground md:text-base">تجربه‌ای گرم و ماندگار، با تمام اطلاعات مورد نیاز شما برای یک اقامت آسوده و خاطره‌انگیز.</p>
          <a href="#services" className="mt-7 inline-flex items-center justify-center rounded-xl bg-secondary px-7 py-3.5 text-sm font-bold text-secondary-foreground shadow-lg shadow-secondary/20 transition-all hover:-translate-y-1 hover:shadow-xl">کشف خدمات هتل</a>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-5 py-10 md:py-16">
        <div className="mb-8 flex items-end justify-between gap-4"><div><span className="text-xs font-bold text-secondary">دسترسی سریع</span><h2 className="mt-2 font-display text-3xl md:text-4xl">در طول اقامت چه نیاز دارید؟</h2></div><ConciergeBell className="hidden size-9 text-gold md:block" /></div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {quickLinks.map(({ id, label, sub, icon: Icon }) => (
            <a key={id} href={`#${id}`} className="group rounded-2xl border border-border bg-card p-4 shadow-sm transition-all hover:-translate-y-1 hover:border-gold hover:shadow-lg md:p-6">
              <span className="mb-5 flex size-11 items-center justify-center rounded-xl bg-muted text-secondary transition-transform group-hover:rotate-3 group-hover:scale-110"><Icon className="size-5" /></span>
              <strong className="block text-sm md:text-base">{label}</strong><span className="mt-1 block text-xs text-muted-foreground">{sub}</span>
            </a>
          ))}
        </div>
      </section>

      <section id="restaurant" className="border-y border-border bg-muted/45 py-12 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <SectionTitle eyebrow="رستوران هتل" title="برنامه غذایی و منو" text="برای مشاهده جزئیات و قیمت‌ها، روی هر نرخ‌نامه بزنید." />
          <div className="mb-8 grid gap-3 md:grid-cols-3">
            {schedules.map(([meal, time, place]) => <div key={meal} className="flex items-center justify-between rounded-lg border border-border bg-card p-4"><div><strong>{meal}</strong><p className="mt-1 text-xs text-muted-foreground">{place}</p></div><span className="text-sm font-bold text-secondary">{time}</span></div>)}
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <MenuImage src={lunchAsset.url} alt="نرخ‌نامه ناهار هتل طلائیه" label="منوی ناهار" onOpen={() => setPreview({ src: lunchAsset.url, alt: "نرخ‌نامه ناهار هتل طلائیه" })} />
            <MenuImage src={dinnerAsset.url} alt="نرخ‌نامه شام هتل طلائیه" label="منوی شام" onOpen={() => setPreview({ src: dinnerAsset.url, alt: "نرخ‌نامه شام هتل طلائیه" })} />
          </div>
        </div>
      </section>

      <section id="cafe" className="bg-primary py-12 text-primary-foreground md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 md:grid-cols-[.75fr_1.25fr]">
          <div><span className="text-xs font-bold text-gold">کافی‌شاپ طلائیه</span><h2 className="mt-3 font-display text-4xl">لحظه‌ای گرم و دل‌نشین</h2><p className="mt-4 max-w-md text-sm leading-8 text-primary-foreground/70">انواع قهوه گرم و سرد، نوشیدنی‌های طبیعی، دمنوش و بستنی در فضایی آرام پذیرای شماست.</p><button type="button" onClick={() => setPreview({ src: cafeAsset.url, alt: "منوی کافی‌شاپ هتل طلائیه" })} className="mt-6 inline-flex items-center gap-2 rounded-xl border border-gold px-5 py-3 text-sm font-bold text-gold transition-colors hover:bg-gold hover:text-accent-foreground"><Maximize2 className="size-4" /> مشاهده کامل منو</button></div>
          <button type="button" onClick={() => setPreview({ src: cafeAsset.url, alt: "منوی کافی‌شاپ هتل طلائیه" })} className="mx-auto block w-full max-w-lg overflow-hidden rounded-lg border border-gold/50 bg-card shadow-2xl"><img src={cafeAsset.url} alt="منوی کافی‌شاپ هتل طلائیه" className="h-auto w-full" /></button>
        </div>
      </section>

      <section id="shuttle" className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-2 md:py-20">
        <div><SectionTitle eyebrow="رفت‌وآمد" title="سرویس‌های هتل" text="ساعت‌ها نمونه هستند و پس از دریافت برنامه قطعی هتل به‌روزرسانی می‌شوند." /><div className="space-y-3">{[["حرکت صبح", "۸:۰۰"], ["حرکت ظهر", "۱۳:۳۰"], ["حرکت عصر", "۱۷:۳۰"], ["بازگشت شب", "۲۱:۳۰"]].map(([title,time], i)=><div key={title} className="flex items-center gap-4 rounded-lg border border-border bg-card p-4"><span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">{i+1}</span><strong className="grow">{title}</strong><span className="font-bold text-secondary">{time}</span></div>)}</div></div>
        <div id="spaces"><SectionTitle eyebrow="فضاهای هتل" title="آسایش در دسترس شما" text="فضاهای اصلی مجموعه برای تجربه اقامتی راحت و منظم." /><div className="grid grid-cols-2 gap-3">{[["پذیرش شبانه‌روزی","پاسخ‌گویی در تمام ساعات"],["رستوران","پذیرایی وعده‌های روزانه"],["کافی‌شاپ","نوشیدنی و میان‌وعده"],["خانه‌داری","رسیدگی روزانه اتاق"]].map(([title,text])=><div key={title} className="rounded-lg border border-border bg-card p-5"><MapPin className="mb-4 size-5 text-gold"/><strong className="block text-sm">{title}</strong><p className="mt-2 text-xs leading-6 text-muted-foreground">{text}</p></div>)}</div></div>
      </section>

      <section id="guide" className="border-y border-border bg-muted/45 py-12 md:py-20"><div className="mx-auto max-w-6xl px-5"><SectionTitle eyebrow="اطلاعات اقامت" title="راهنما و اطلاعیه‌های هتل" text="برای خواندن متن هر تصویر، آن را لمس کنید." /><div className="grid grid-cols-2 gap-4 md:grid-cols-3">{[{src:guideAsset.url,alt:"راهنمای مهمان هتل"},{src:noticeAsset.url,alt:"اطلاعیه هتل"},{src:memorialAsset.url,alt:"یادبود هتل طلائیه"}].map(item=><button type="button" key={item.alt} onClick={()=>setPreview(item)} className="group relative overflow-hidden rounded-lg border border-border bg-card shadow-sm"><img src={item.src} alt={item.alt} className="aspect-[3/4] w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"/><span className="absolute bottom-3 left-3 flex size-9 items-center justify-center rounded-full bg-card text-foreground shadow"><Maximize2 className="size-4"/></span></button>)}</div></div></section>

      <footer className="bg-ink px-5 py-12 text-center text-primary-foreground"><img src={logoAsset.url} alt="نشان هتل طلائیه" className="mx-auto h-20 w-20 object-contain"/><h2 className="mt-4 font-display text-3xl">هتل طلائیه</h2><p className="mt-2 text-xs text-gold">آرامش شما، افتخار میزبانی ماست</p><div className="mx-auto mt-8 h-px max-w-sm bg-gold/30"/><p className="mt-5 text-xs text-primary-foreground/50">کلیه حقوق این راهنمای مهمان متعلق به هتل طلائیه است.</p></footer>

      <nav className="fixed inset-x-0 bottom-0 z-30 grid h-18 grid-cols-4 border-t border-border bg-card px-2 shadow-[0_-5px_20px_oklch(0_0_0/.08)] md:hidden" aria-label="منوی موبایل">
        {[{id:"top",label:"خانه",icon:ConciergeBell},{id:"restaurant",label:"غذا",icon:UtensilsCrossed},{id:"cafe",label:"کافه",icon:Coffee},{id:"guide",label:"راهنما",icon:ScrollText}].map(({id,label,icon:Icon})=><a key={id} href={`#${id}`} className="flex flex-col items-center justify-center gap-1 text-[11px] text-muted-foreground"><Icon className="size-5"/><span>{label}</span></a>)}
      </nav>

      {preview && <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 p-3 md:p-8" role="dialog" aria-modal="true" aria-label={preview.alt}><button type="button" onClick={()=>setPreview(null)} className="absolute left-4 top-4 flex size-11 items-center justify-center rounded-full bg-card text-foreground" aria-label="بستن"><X className="size-5"/></button><img src={preview.src} alt={preview.alt} className="max-h-[92vh] max-w-full rounded-md object-contain" /></div>}
    </main>
  );
}

function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return <div className="mb-8"><span className="text-xs font-bold text-secondary">{eyebrow}</span><h2 className="mt-2 font-display text-3xl md:text-4xl">{title}</h2><p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p></div>;
}

function MenuImage({ src, alt, label, onOpen }: { src: string; alt: string; label: string; onOpen: () => void }) {
  return <button type="button" onClick={onOpen} className="group overflow-hidden rounded-lg border border-border bg-card text-right shadow-sm"><div className="flex items-center justify-between px-5 py-4"><strong>{label}</strong><Maximize2 className="size-4 text-muted-foreground"/></div><img src={src} alt={alt} className="aspect-[2/1] w-full object-cover transition-transform duration-300 group-hover:scale-[1.01]" /></button>;
}
