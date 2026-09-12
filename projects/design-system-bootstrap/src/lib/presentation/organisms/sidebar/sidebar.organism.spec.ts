import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SidebarOrganism } from './sidebar.organism';
import { RouterTestingModule } from '@angular/router/testing';

describe('SidebarOrganism', () => {
  let component: SidebarOrganism;
  let fixture: ComponentFixture<SidebarOrganism>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarOrganism, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarOrganism);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default values', () => {
    expect(component.title).toBe('Menú');
    expect(component.navLinks).toEqual([]);
    expect(component.actionButtons).toEqual([]);
    expect(component.isOpen).toBeTrue();
  });

  it('should toggle isOpen when toggle is called', () => {
    expect(component.isOpen).toBeTrue();
    component.toggle();
    expect(component.isOpen).toBeFalse();
    component.toggle();
    expect(component.isOpen).toBeTrue();
  });

  it('should emit actionClick when onActionClick is called', () => {
    const emitted: string[] = [];
    component.actionClick.subscribe((id) => emitted.push(id));
    
    component.onActionClick('settings');
    expect(emitted).toEqual(['settings']);
  });

  it('should apply closed class when isOpen is false', () => {
    component.isOpen = false;
    fixture.detectChanges();
    const aside = fixture.nativeElement.querySelector('aside');
    expect(aside.classList.contains('dsb-sidebar--closed')).toBeTrue();
    expect(aside.classList.contains('dsb-sidebar--open')).toBeFalse();
  });

  it('should apply open class when isOpen is true', () => {
    component.isOpen = true;
    fixture.detectChanges();
    const aside = fixture.nativeElement.querySelector('aside');
    expect(aside.classList.contains('dsb-sidebar--open')).toBeTrue();
    expect(aside.classList.contains('dsb-sidebar--closed')).toBeFalse();
  });

  it('should render the title correctly', () => {
    component.title = 'Test Sidebar';
    fixture.detectChanges();
    const titleEl = fixture.nativeElement.querySelector('.dsb-sidebar__title');
    expect(titleEl.textContent).toContain('Test Sidebar');
  });

  it('should not render actions divider if actionButtons is empty', () => {
    component.actionButtons = [];
    fixture.detectChanges();
    const actionsEl = fixture.nativeElement.querySelector('.dsb-sidebar__actions');
    expect(actionsEl).toBeNull();
  });

  it('should render actions divider if actionButtons has items', () => {
    component.actionButtons = [{ idButton: '1', text: 'Act', type: 'primary' }];
    fixture.detectChanges();
    const actionsEl = fixture.nativeElement.querySelector('.dsb-sidebar__actions');
    expect(actionsEl).not.toBeNull();
  });
});
