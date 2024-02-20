import { DashboardPage } from '..';
import BasePage from '../../Base';
import { ToolbarPage } from '../common/Toolbar';
import { expect } from '@playwright/test';
import { TopbarPage } from '../common/Topbar';
import { CalendarTopbarPage } from './CalendarTopBar';
import { CalendarSideMenuPage } from './CalendarSideMenu';
import { CalendarMonthPage } from './CalendarMonth';
import { CalendarYearPage } from './CalendarYear';

export class CalendarPage extends BasePage {
  readonly dashboard: DashboardPage;
  readonly toolbar: ToolbarPage;
  readonly topbar: TopbarPage;
  readonly calendarTopbar: CalendarTopbarPage;
  readonly sideMenu: CalendarSideMenuPage;
  readonly calendarMonth: CalendarMonthPage;
  readonly calendarYear: CalendarYearPageß;

  constructor(dashboard: DashboardPage) {
    super(dashboard.rootPage);
    this.dashboard = dashboard;
    this.toolbar = new ToolbarPage(this);
    this.topbar = new TopbarPage(this);
    this.calendarTopbar = new CalendarTopbarPage(this);
    this.sideMenu = new CalendarSideMenuPage(this);
    this.calendarMonth = new CalendarMonthPage(this);
    this.calendarYear = new CalendarYearPage(this);
  }

  get() {
    return this.dashboard.rootPage.getByTestId('nc-calendar-wrapper');
  }

  async verifySideBarClosed() {
    const sideBar = this.get().getByTestId('nc-calendar-side-menu');
    const classList = await sideBar.evaluate(el => [...el.classList]);
    expect(classList).not.toContain('nc-calendar-side-menu-open');
  }

  async verifySideBarOpen() {
    const sideBar = this.get().getByTestId('nc-calendar-side-menu');

    const classList = await sideBar.evaluate(el => [...el.classList]);
    expect(classList).toContain('nc-calendar-side-menu-open');
  }

  async waitLoading() {
    await this.rootPage.waitForTimeout(2000);
  }
}
