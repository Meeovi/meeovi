import { logSearchEvent } from './analytics'

export { logSearchEvent, getTelemetryStats } from './analytics'

export default { logSearchEvent: (event: any) => logSearchEvent(event) }
