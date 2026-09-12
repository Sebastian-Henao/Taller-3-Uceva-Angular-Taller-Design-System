import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { MOCK_NAV_LINKS } from '../../../mocks/nav-link.mocks';
import { NavLinkMolecule } from './nav-link.molecule';

describe('NavLinkMolecule', () => {
  let component: NavLinkMolecule;
  let fixture: ComponentFixture<NavLinkMolecule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavLinkMolecule],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavLinkMolecule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debe crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debe inicializar navLinks como un arreglo vacío por defecto', () => {
    expect(component.navLinks).toEqual([]);
  });

  it('debe usar una etiqueta accesible configurable para la navegación', () => {
    const navigation = fixture.debugElement.query(By.css('ul'));
    expect(navigation.attributes['aria-label']).toBe('Navegación principal');

    component.ariaLabel = 'Navegación del Showcase';
    fixture.detectChanges();

    expect(navigation.attributes['aria-label']).toBe('Navegación del Showcase');
  });

  it('debe renderizar la cantidad correcta de enlaces', () => {
    component.navLinks = MOCK_NAV_LINKS;
    fixture.detectChanges();
    const links = fixture.debugElement.queryAll(By.css('a'));
    expect(links.length).toBe(MOCK_NAV_LINKS.length);
  });

  it('debe mostrar el texto correcto en cada enlace', () => {
    component.navLinks = MOCK_NAV_LINKS;
    fixture.detectChanges();
    const links = fixture.debugElement.queryAll(By.css('a'));
    MOCK_NAV_LINKS.forEach((navLink, index) => {
      expect(links[index].nativeElement.textContent).toContain(navLink.text);
    });
  });

});
