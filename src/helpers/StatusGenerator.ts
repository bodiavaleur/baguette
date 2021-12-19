import {
  SliceStatuses,
  SliceStatusItem,
  StatusesCollection,
  StatusTemplates,
} from '~types/statuses';

const {Reset, Pending, Rejected, Fulfilled} = SliceStatuses;

class StatusGeneratorBase {
  constructor(
    private defaultStatus: SliceStatusItem = {
      pending: false,
      success: false,
      error: '',
    },
    private statusTemplates: StatusTemplates = {
      [Reset]: () => defaultStatus,
      [Pending]: () => ({...defaultStatus, pending: true}),
      [Rejected]: error => ({...defaultStatus, error: error ?? ''}),
      [Fulfilled]: () => ({...defaultStatus, success: true}),
    },
  ) {}

  public generateStatuses(statuses: string[]): StatusesCollection {
    let statusObj: StatusesCollection = {};

    statuses.forEach(name => {
      statusObj[name] = this.statusTemplates[Reset]();
    });

    return statusObj;
  }

  public setStatus(template = Reset, payload?: unknown): SliceStatusItem {
    const status = this.statusTemplates[template];
    return payload ? status(String(payload)) : status();
  }
}

const StatusGenerator = new StatusGeneratorBase();

export default StatusGenerator;
