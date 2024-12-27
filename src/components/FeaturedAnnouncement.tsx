"use client";
import React, { useEffect, useRef, useState } from "react";
import createDOMPurify from "dompurify";

interface FeaturedAnnouncementProps {
  show: boolean;
  language: "en" | "tr";
  announcementTR: string;
  announcementEN: string;
}

const FeaturedAnnouncement: React.FC<FeaturedAnnouncementProps> = ({
  show,
  language,
  announcementTR,
  announcementEN,
}) => {
  const [sanitizedContent, setSanitizedContent] = useState<string>("");
  const DOMPurifyRef = useRef<ReturnType<typeof createDOMPurify> | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      DOMPurifyRef.current = createDOMPurify(window);
      const sanitizer = DOMPurifyRef.current;
      const content = language === "en" ? announcementEN : announcementTR;
      setSanitizedContent(sanitizer ? sanitizer.sanitize(content) : content);
    }
  }, [language, announcementTR, announcementEN]);

  if (!show) return null;

  return <div dangerouslySetInnerHTML={{ __html: sanitizedContent }}></div>;
};

export default FeaturedAnnouncement;
