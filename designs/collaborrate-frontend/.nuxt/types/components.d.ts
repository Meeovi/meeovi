
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T

interface _GlobalComponents {
  'ContentAddCategory': typeof import("../../components/Content/add-category.vue").default
  'ContentAddTag': typeof import("../../components/Content/add-tag.vue").default
  'ContentBlogDrafts': typeof import("../../components/Content/blog/drafts.vue").default
  'ContentBlogPublished': typeof import("../../components/Content/blog/published.vue").default
  'ContentCustomersAddAddresses': typeof import("../../components/Content/customers/add-addresses.vue").default
  'ContentCustomersAddCalendar': typeof import("../../components/Content/customers/add-calendar.vue").default
  'ContentCustomersAddCampaigns': typeof import("../../components/Content/customers/add-campaigns.vue").default
  'ContentCustomersAddContracts': typeof import("../../components/Content/customers/add-contracts.vue").default
  'ContentCustomersAddCustomers': typeof import("../../components/Content/customers/add-customers.vue").default
  'ContentCustomersAddDocuments': typeof import("../../components/Content/customers/add-documents.vue").default
  'ContentCustomersAddInvoice': typeof import("../../components/Content/customers/add-invoice.vue").default
  'ContentCustomersAddLeads': typeof import("../../components/Content/customers/add-leads.vue").default
  'ContentCustomersAddMeeting': typeof import("../../components/Content/customers/add-meeting.vue").default
  'ContentCustomersAddOpportunities': typeof import("../../components/Content/customers/add-opportunities.vue").default
  'ContentCustomersAddQuotes': typeof import("../../components/Content/customers/add-quotes.vue").default
  'ContentCustomersAddSurveys': typeof import("../../components/Content/customers/add-surveys.vue").default
  'ContentCustomersAddTargets': typeof import("../../components/Content/customers/add-targets.vue").default
  'ContentCustomersAddVisits': typeof import("../../components/Content/customers/add-visits.vue").default
  'EditorsEditor': typeof import("../../components/Editors/editor.vue").default
  'FooterNav': typeof import("../../components/FooterNav.vue").default
  'MenusCustomersmenu': typeof import("../../components/Menus/customersmenu.vue").default
  'MenusListsmenu': typeof import("../../components/Menus/listsmenu.vue").default
  'MenusMailmenu': typeof import("../../components/Menus/mailmenu.vue").default
  'MenusMessengermenu': typeof import("../../components/Menus/messengermenu.vue").default
  'MenusProjectsmenu': typeof import("../../components/Menus/projectsmenu.vue").default
  'MenusTicketsmenu': typeof import("../../components/Menus/ticketsmenu.vue").default
  'RelatedRelatedposts': typeof import("../../components/Related/relatedposts.vue").default
  'RelatedRelatedproducts': typeof import("../../components/Related/relatedproducts.vue").default
  'Search': typeof import("../../components/Search/search.vue").default
  'Ecosystemmenu': typeof import("../../components/ecosystemmenu.vue").default
  'HomePageBrowseteams': typeof import("../../components/homePage/browseteams.vue").default
  'HomePageContentone': typeof import("../../components/homePage/contentone.vue").default
  'HomePageContenttwo': typeof import("../../components/homePage/contenttwo.vue").default
  'HomePageCreateteam': typeof import("../../components/homePage/createteam.vue").default
  'HomePageLatest': typeof import("../../components/homePage/latest.vue").default
  'HomePagePeople': typeof import("../../components/homePage/people.vue").default
  'TheWelcome': typeof import("../../../../node_modules/@sidebase/core/components/TheWelcome.vue").default
  'TheWelcomeContainer': typeof import("../../../../node_modules/@sidebase/core/components/TheWelcomeContainer.vue").default
  'TimelineItem': typeof import("../../../../node_modules/@sidebase/core/components/TimelineItem.vue").default
  'ContentDoc': typeof import("../../../../node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue").default
  'ContentList': typeof import("../../../../node_modules/@nuxt/content/dist/runtime/components/ContentList.vue").default
  'ContentNavigation': typeof import("../../../../node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue").default
  'ContentQuery': typeof import("../../../../node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue").default
  'ContentRenderer': typeof import("../../../../node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue").default
  'ContentRendererMarkdown': typeof import("../../../../node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue").default
  'ContentSlot': typeof import("../../../../node_modules/@nuxt/content/dist/runtime/components/ContentSlot.vue").default
  'DocumentDrivenEmpty': typeof import("../../../../node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenEmpty.vue").default
  'DocumentDrivenNotFound': typeof import("../../../../node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenNotFound.vue").default
  'Markdown': typeof import("../../../../node_modules/@nuxt/content/dist/runtime/components/Markdown.vue").default
  'ProseCode': typeof import("../../../../node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue").default
  'ProseCodeInline': typeof import("../../../../node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCodeInline.vue").default
  'ProsePre': typeof import("../../../../node_modules/@nuxt/content/dist/runtime/components/Prose/ProsePre.vue").default
  'ProseA': typeof import("../../../../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseA.vue").default
  'ProseBlockquote': typeof import("../../../../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseBlockquote.vue").default
  'ProseEm': typeof import("../../../../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseEm.vue").default
  'ProseH1': typeof import("../../../../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH1.vue").default
  'ProseH2': typeof import("../../../../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH2.vue").default
  'ProseH3': typeof import("../../../../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH3.vue").default
  'ProseH4': typeof import("../../../../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH4.vue").default
  'ProseH5': typeof import("../../../../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH5.vue").default
  'ProseH6': typeof import("../../../../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH6.vue").default
  'ProseHr': typeof import("../../../../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseHr.vue").default
  'ProseImg': typeof import("../../../../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseImg.vue").default
  'ProseLi': typeof import("../../../../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseLi.vue").default
  'ProseOl': typeof import("../../../../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseOl.vue").default
  'ProseP': typeof import("../../../../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseP.vue").default
  'ProseScript': typeof import("../../../../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseScript.vue").default
  'ProseStrong': typeof import("../../../../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseStrong.vue").default
  'ProseTable': typeof import("../../../../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTable.vue").default
  'ProseTbody': typeof import("../../../../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTbody.vue").default
  'ProseTd': typeof import("../../../../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTd.vue").default
  'ProseTh': typeof import("../../../../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTh.vue").default
  'ProseThead': typeof import("../../../../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseThead.vue").default
  'ProseTr': typeof import("../../../../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTr.vue").default
  'ProseUl': typeof import("../../../../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseUl.vue").default
  'NuxtWelcome': typeof import("../../../../node_modules/nuxt/dist/app/components/welcome.vue").default
  'NuxtLayout': typeof import("../../../../node_modules/nuxt/dist/app/components/nuxt-layout").default
  'NuxtErrorBoundary': typeof import("../../../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue").default
  'ClientOnly': typeof import("../../../../node_modules/nuxt/dist/app/components/client-only").default
  'DevOnly': typeof import("../../../../node_modules/nuxt/dist/app/components/dev-only").default
  'ServerPlaceholder': typeof import("../../../../node_modules/nuxt/dist/app/components/server-placeholder").default
  'NuxtLink': typeof import("../../../../node_modules/nuxt/dist/app/components/nuxt-link").default
  'NuxtLoadingIndicator': typeof import("../../../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator").default
  'NuxtTime': typeof import("../../../../node_modules/nuxt/dist/app/components/nuxt-time.vue").default
  'NuxtRouteAnnouncer': typeof import("../../../../node_modules/nuxt/dist/app/components/nuxt-route-announcer").default
  'NuxtImg': typeof import("../../../../node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtImg
  'NuxtPicture': typeof import("../../../../node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtPicture
  'MDC': typeof import("../../../../node_modules/@nuxtjs/mdc/dist/runtime/components/MDC.vue").default
  'MDCRenderer': typeof import("../../../../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCRenderer.vue").default
  'MDCSlot': typeof import("../../../../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCSlot.vue").default
  'NuxtPage': typeof import("../../../../node_modules/nuxt/dist/pages/runtime/page").default
  'NoScript': typeof import("../../../../node_modules/nuxt/dist/head/runtime/components").NoScript
  'Link': typeof import("../../../../node_modules/nuxt/dist/head/runtime/components").Link
  'Base': typeof import("../../../../node_modules/nuxt/dist/head/runtime/components").Base
  'Title': typeof import("../../../../node_modules/nuxt/dist/head/runtime/components").Title
  'Meta': typeof import("../../../../node_modules/nuxt/dist/head/runtime/components").Meta
  'Style': typeof import("../../../../node_modules/nuxt/dist/head/runtime/components").Style
  'Head': typeof import("../../../../node_modules/nuxt/dist/head/runtime/components").Head
  'Html': typeof import("../../../../node_modules/nuxt/dist/head/runtime/components").Html
  'Body': typeof import("../../../../node_modules/nuxt/dist/head/runtime/components").Body
  'NuxtIsland': typeof import("../../../../node_modules/nuxt/dist/app/components/nuxt-island").default
  'LazyContentAddCategory': LazyComponent<typeof import("../../components/Content/add-category.vue").default>
  'LazyContentAddTag': LazyComponent<typeof import("../../components/Content/add-tag.vue").default>
  'LazyContentBlogDrafts': LazyComponent<typeof import("../../components/Content/blog/drafts.vue").default>
  'LazyContentBlogPublished': LazyComponent<typeof import("../../components/Content/blog/published.vue").default>
  'LazyContentCustomersAddAddresses': LazyComponent<typeof import("../../components/Content/customers/add-addresses.vue").default>
  'LazyContentCustomersAddCalendar': LazyComponent<typeof import("../../components/Content/customers/add-calendar.vue").default>
  'LazyContentCustomersAddCampaigns': LazyComponent<typeof import("../../components/Content/customers/add-campaigns.vue").default>
  'LazyContentCustomersAddContracts': LazyComponent<typeof import("../../components/Content/customers/add-contracts.vue").default>
  'LazyContentCustomersAddCustomers': LazyComponent<typeof import("../../components/Content/customers/add-customers.vue").default>
  'LazyContentCustomersAddDocuments': LazyComponent<typeof import("../../components/Content/customers/add-documents.vue").default>
  'LazyContentCustomersAddInvoice': LazyComponent<typeof import("../../components/Content/customers/add-invoice.vue").default>
  'LazyContentCustomersAddLeads': LazyComponent<typeof import("../../components/Content/customers/add-leads.vue").default>
  'LazyContentCustomersAddMeeting': LazyComponent<typeof import("../../components/Content/customers/add-meeting.vue").default>
  'LazyContentCustomersAddOpportunities': LazyComponent<typeof import("../../components/Content/customers/add-opportunities.vue").default>
  'LazyContentCustomersAddQuotes': LazyComponent<typeof import("../../components/Content/customers/add-quotes.vue").default>
  'LazyContentCustomersAddSurveys': LazyComponent<typeof import("../../components/Content/customers/add-surveys.vue").default>
  'LazyContentCustomersAddTargets': LazyComponent<typeof import("../../components/Content/customers/add-targets.vue").default>
  'LazyContentCustomersAddVisits': LazyComponent<typeof import("../../components/Content/customers/add-visits.vue").default>
  'LazyEditorsEditor': LazyComponent<typeof import("../../components/Editors/editor.vue").default>
  'LazyFooterNav': LazyComponent<typeof import("../../components/FooterNav.vue").default>
  'LazyMenusCustomersmenu': LazyComponent<typeof import("../../components/Menus/customersmenu.vue").default>
  'LazyMenusListsmenu': LazyComponent<typeof import("../../components/Menus/listsmenu.vue").default>
  'LazyMenusMailmenu': LazyComponent<typeof import("../../components/Menus/mailmenu.vue").default>
  'LazyMenusMessengermenu': LazyComponent<typeof import("../../components/Menus/messengermenu.vue").default>
  'LazyMenusProjectsmenu': LazyComponent<typeof import("../../components/Menus/projectsmenu.vue").default>
  'LazyMenusTicketsmenu': LazyComponent<typeof import("../../components/Menus/ticketsmenu.vue").default>
  'LazyRelatedRelatedposts': LazyComponent<typeof import("../../components/Related/relatedposts.vue").default>
  'LazyRelatedRelatedproducts': LazyComponent<typeof import("../../components/Related/relatedproducts.vue").default>
  'LazySearch': LazyComponent<typeof import("../../components/Search/search.vue").default>
  'LazyEcosystemmenu': LazyComponent<typeof import("../../components/ecosystemmenu.vue").default>
  'LazyHomePageBrowseteams': LazyComponent<typeof import("../../components/homePage/browseteams.vue").default>
  'LazyHomePageContentone': LazyComponent<typeof import("../../components/homePage/contentone.vue").default>
  'LazyHomePageContenttwo': LazyComponent<typeof import("../../components/homePage/contenttwo.vue").default>
  'LazyHomePageCreateteam': LazyComponent<typeof import("../../components/homePage/createteam.vue").default>
  'LazyHomePageLatest': LazyComponent<typeof import("../../components/homePage/latest.vue").default>
  'LazyHomePagePeople': LazyComponent<typeof import("../../components/homePage/people.vue").default>
  'LazyTheWelcome': LazyComponent<typeof import("../../../../node_modules/@sidebase/core/components/TheWelcome.vue").default>
  'LazyTheWelcomeContainer': LazyComponent<typeof import("../../../../node_modules/@sidebase/core/components/TheWelcomeContainer.vue").default>
  'LazyTimelineItem': LazyComponent<typeof import("../../../../node_modules/@sidebase/core/components/TimelineItem.vue").default>
  'LazyContentDoc': LazyComponent<typeof import("../../../../node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue").default>
  'LazyContentList': LazyComponent<typeof import("../../../../node_modules/@nuxt/content/dist/runtime/components/ContentList.vue").default>
  'LazyContentNavigation': LazyComponent<typeof import("../../../../node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue").default>
  'LazyContentQuery': LazyComponent<typeof import("../../../../node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue").default>
  'LazyContentRenderer': LazyComponent<typeof import("../../../../node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue").default>
  'LazyContentRendererMarkdown': LazyComponent<typeof import("../../../../node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue").default>
  'LazyContentSlot': LazyComponent<typeof import("../../../../node_modules/@nuxt/content/dist/runtime/components/ContentSlot.vue").default>
  'LazyDocumentDrivenEmpty': LazyComponent<typeof import("../../../../node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenEmpty.vue").default>
  'LazyDocumentDrivenNotFound': LazyComponent<typeof import("../../../../node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenNotFound.vue").default>
  'LazyMarkdown': LazyComponent<typeof import("../../../../node_modules/@nuxt/content/dist/runtime/components/Markdown.vue").default>
  'LazyProseCode': LazyComponent<typeof import("../../../../node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue").default>
  'LazyProseCodeInline': LazyComponent<typeof import("../../../../node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCodeInline.vue").default>
  'LazyProsePre': LazyComponent<typeof import("../../../../node_modules/@nuxt/content/dist/runtime/components/Prose/ProsePre.vue").default>
  'LazyProseA': LazyComponent<typeof import("../../../../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseA.vue").default>
  'LazyProseBlockquote': LazyComponent<typeof import("../../../../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseBlockquote.vue").default>
  'LazyProseEm': LazyComponent<typeof import("../../../../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseEm.vue").default>
  'LazyProseH1': LazyComponent<typeof import("../../../../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH1.vue").default>
  'LazyProseH2': LazyComponent<typeof import("../../../../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH2.vue").default>
  'LazyProseH3': LazyComponent<typeof import("../../../../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH3.vue").default>
  'LazyProseH4': LazyComponent<typeof import("../../../../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH4.vue").default>
  'LazyProseH5': LazyComponent<typeof import("../../../../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH5.vue").default>
  'LazyProseH6': LazyComponent<typeof import("../../../../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH6.vue").default>
  'LazyProseHr': LazyComponent<typeof import("../../../../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseHr.vue").default>
  'LazyProseImg': LazyComponent<typeof import("../../../../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseImg.vue").default>
  'LazyProseLi': LazyComponent<typeof import("../../../../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseLi.vue").default>
  'LazyProseOl': LazyComponent<typeof import("../../../../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseOl.vue").default>
  'LazyProseP': LazyComponent<typeof import("../../../../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseP.vue").default>
  'LazyProseScript': LazyComponent<typeof import("../../../../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseScript.vue").default>
  'LazyProseStrong': LazyComponent<typeof import("../../../../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseStrong.vue").default>
  'LazyProseTable': LazyComponent<typeof import("../../../../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTable.vue").default>
  'LazyProseTbody': LazyComponent<typeof import("../../../../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTbody.vue").default>
  'LazyProseTd': LazyComponent<typeof import("../../../../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTd.vue").default>
  'LazyProseTh': LazyComponent<typeof import("../../../../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTh.vue").default>
  'LazyProseThead': LazyComponent<typeof import("../../../../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseThead.vue").default>
  'LazyProseTr': LazyComponent<typeof import("../../../../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTr.vue").default>
  'LazyProseUl': LazyComponent<typeof import("../../../../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseUl.vue").default>
  'LazyNuxtWelcome': LazyComponent<typeof import("../../../../node_modules/nuxt/dist/app/components/welcome.vue").default>
  'LazyNuxtLayout': LazyComponent<typeof import("../../../../node_modules/nuxt/dist/app/components/nuxt-layout").default>
  'LazyNuxtErrorBoundary': LazyComponent<typeof import("../../../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue").default>
  'LazyClientOnly': LazyComponent<typeof import("../../../../node_modules/nuxt/dist/app/components/client-only").default>
  'LazyDevOnly': LazyComponent<typeof import("../../../../node_modules/nuxt/dist/app/components/dev-only").default>
  'LazyServerPlaceholder': LazyComponent<typeof import("../../../../node_modules/nuxt/dist/app/components/server-placeholder").default>
  'LazyNuxtLink': LazyComponent<typeof import("../../../../node_modules/nuxt/dist/app/components/nuxt-link").default>
  'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../../../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator").default>
  'LazyNuxtTime': LazyComponent<typeof import("../../../../node_modules/nuxt/dist/app/components/nuxt-time.vue").default>
  'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../../../../node_modules/nuxt/dist/app/components/nuxt-route-announcer").default>
  'LazyNuxtImg': LazyComponent<typeof import("../../../../node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtImg>
  'LazyNuxtPicture': LazyComponent<typeof import("../../../../node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtPicture>
  'LazyMDC': LazyComponent<typeof import("../../../../node_modules/@nuxtjs/mdc/dist/runtime/components/MDC.vue").default>
  'LazyMDCRenderer': LazyComponent<typeof import("../../../../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCRenderer.vue").default>
  'LazyMDCSlot': LazyComponent<typeof import("../../../../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCSlot.vue").default>
  'LazyNuxtPage': LazyComponent<typeof import("../../../../node_modules/nuxt/dist/pages/runtime/page").default>
  'LazyNoScript': LazyComponent<typeof import("../../../../node_modules/nuxt/dist/head/runtime/components").NoScript>
  'LazyLink': LazyComponent<typeof import("../../../../node_modules/nuxt/dist/head/runtime/components").Link>
  'LazyBase': LazyComponent<typeof import("../../../../node_modules/nuxt/dist/head/runtime/components").Base>
  'LazyTitle': LazyComponent<typeof import("../../../../node_modules/nuxt/dist/head/runtime/components").Title>
  'LazyMeta': LazyComponent<typeof import("../../../../node_modules/nuxt/dist/head/runtime/components").Meta>
  'LazyStyle': LazyComponent<typeof import("../../../../node_modules/nuxt/dist/head/runtime/components").Style>
  'LazyHead': LazyComponent<typeof import("../../../../node_modules/nuxt/dist/head/runtime/components").Head>
  'LazyHtml': LazyComponent<typeof import("../../../../node_modules/nuxt/dist/head/runtime/components").Html>
  'LazyBody': LazyComponent<typeof import("../../../../node_modules/nuxt/dist/head/runtime/components").Body>
  'LazyNuxtIsland': LazyComponent<typeof import("../../../../node_modules/nuxt/dist/app/components/nuxt-island").default>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}
