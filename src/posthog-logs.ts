import posthog from './posthog'

export const portfolioLogs = {
  caseStudyOpened(caseStudySlug: string) {
    posthog?.logger.info('portfolio_case_study_opened', { case_study_slug: caseStudySlug })
  },
  resumeDownloadRequested(placement: 'about_page' | 'contact_footer') {
    posthog?.logger.info('portfolio_resume_download_requested', { placement })
  },
  contactEmailRequested(placement: 'contact_call_to_action' | 'contact_footer') {
    posthog?.logger.info('portfolio_contact_email_requested', { placement })
  },
}
