# Event tracking report

This document lists all PostHog events that have been automatically added to your Next.js application.

## Events by File

### src/app/services/[slug]/client.tsx

- **schedule_consultation_clicked**: Fired when a user clicks a 'Schedule Consultation' button on a service page.
- **faq_toggled**: Fired when a user expands or collapses an FAQ item on a service page.

### src/components/layout/header.tsx

- **navigation_link_clicked**: Fired when a user clicks on a navigation link in the header or mobile menu.
- **book_consultation_clicked**: Fired when a user clicks the 'Book Consultation' button in the header or mobile menu.

### src/components/sections/cta-section.tsx

- **cta_primary_clicked**: User engaged with the primary CTA button in the homepage CTA section.
- **cta_secondary_clicked**: User engaged with the secondary CTA button in the homepage CTA section.

### src/components/ui/theme-switcher.tsx

- **theme-switched**: Fired when a user clicks the theme switcher button to toggle between light and dark mode.

### src/components/ui/accordion.tsx

- **accordion-toggled**: Fired when a user opens or closes an accordion item.

### src/components/ui/sheet.tsx

- **sheet_opened**: Fired when a sheet component is opened by the user.
- **sheet_closed**: Fired when a sheet component is closed by the user.

### src/components/sections/hero-section.tsx

- **hero_book_call_clicked**: Fired when a user clicks the primary hero CTA.
- **hero_preview_capabilities_clicked**: Fired when a user clicks the secondary hero CTA.


## Events still awaiting implementation
- (human: you can fill these in)
---

## Next Steps

1. Review the changes made to your files
2. Test that events are being captured correctly
3. Create insights and dashboards in PostHog
4. Make a list of events we missed above. Knock them out yourself, or give this file to an agent.

Learn more about what to measure with PostHog and why: https://posthog.com/docs/new-to-posthog/getting-hogpilled
