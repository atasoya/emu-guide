import React from "react";

interface FeaturedAnnouncementProps {
  show: boolean;
  language: "en" | "tr";
  announcementTR: string;
  announcementEN: string;
  link?: string;
}

const FeaturedAnnouncement: React.FC<FeaturedAnnouncementProps> = ({
  show,
  language,
  announcementTR,
  announcementEN,
  link,
}) => {
  if (!show) return null;
  return (
    <section className="bg-yellow-100 text-yellow-900 py-2">
      <div className="container mx-auto text-center">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`font-bold text-sm hover:underline md:text-lg`}
        >
          {language === "en" ? announcementEN : announcementTR}
        </a>
      </div>
    </section>
  );
};

export default FeaturedAnnouncement;
