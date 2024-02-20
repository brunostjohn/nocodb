import { expect, Locator } from '@playwright/test';
import BasePage from '../../Base';
import { CalendarPage } from './index';

export class CalendarMonthPage extends BasePage {
  readonly parent: CalendarPage;

  constructor(parent: CalendarPage) {
    super(parent.rootPage);
    this.parent = parent;
  }

  get() {
    return this.rootPage.getByTestId('nc-calendar-month-view');
  }

  getRecordContainer() {
    return this.get().getByTestId('nc-calendar-month-record-container');
  }

  async dragAndDrop({ record, to }: { record: string; to: { rowIndex: number; columnIndex: number } }) {
    const recordContainer = this.getRecordContainer();
    const recordCard = recordContainer.getByTestId(`nc-calendar-month-record-${record}`);
    const toDay = this.get().getByTestId('nc-calendar-month-day').nth(to.columnIndex).nth(to.rowIndex);
    const cord = await toDay.boundingBox();

    await recordCard.hover();
    await this.rootPage.mouse.down({ button: 'right' });

    await this.rootPage.mouse.move(cord.x + cord.width / 2, cord.y + cord.height / 2);
    await this.rootPage.mouse.up();
  }

  async selectDate({ rowIndex, columnIndex }: { rowIndex: number; columnIndex: number }) {
    const week = this.get().getByTestId('nc-calendar-month-week');

    const day = week.nth(rowIndex).getByTestId('nc-calendar-month-day').nth(columnIndex);
    await day.click({
      force: true,
      position: {
        x: 0,
        y: 1,
      },
    });
  }
}
