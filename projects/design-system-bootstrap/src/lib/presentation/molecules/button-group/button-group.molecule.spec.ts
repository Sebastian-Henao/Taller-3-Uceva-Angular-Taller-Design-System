import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MOCK_BUTTONS_GROUP_DATA } from '../../../mocks/button-group.mock';
import { ButtonGroupMolecule } from './button-group.molecule';

describe('ButtonGroupMolecule', () => {
  let component: ButtonGroupMolecule;
  let fixture: ComponentFixture<ButtonGroupMolecule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonGroupMolecule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonGroupMolecule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deberia crear el component', () => {
    expect(component).toBeTruthy();
  });

  it('deberia usar una etiqueta accesible configurable para el grupo', () => {
    const buttonsGroup = fixture.debugElement.query(By.css('.btn-group'));
    expect(buttonsGroup.attributes['aria-label']).toBe('Grupo de botones');

    component.ariaLabel = 'Acciones del formulario';
    fixture.detectChanges();

    expect(buttonsGroup.attributes['aria-label']).toBe('Acciones del formulario');
  });

  it('Deberia agregar el numero de Buttons solicitados', () => {
    component.buttonsGroupData = MOCK_BUTTONS_GROUP_DATA;
    fixture.detectChanges();
    const buttonsGroup = fixture.debugElement.query(By.css('.btn-group'));
    expect(buttonsGroup.children.length).toBe(MOCK_BUTTONS_GROUP_DATA.length);
  });

  it('Deberia agregar el id, type y text a cada Button', () => {
    component.buttonsGroupData = MOCK_BUTTONS_GROUP_DATA;
    fixture.detectChanges();
    
    const buttonsGroup = fixture.debugElement.query(By.css('.btn-group'));
    component.buttonsGroupData.forEach(({ idButton, type, text }) => {
      const button = buttonsGroup.query(By.css(`#${idButton}`));
      expect(button.attributes['id']).toEqual(idButton);
      expect(button.nativeElement.textContent).toEqual(text);
      expect(button.nativeElement.className).toContain(`btn-${type}`)
    });
  });

  it('Debería emitir el idButton cuando se hace click a cada Button', () => {
    component.buttonsGroupData = MOCK_BUTTONS_GROUP_DATA;
    const spy = jest.spyOn(component.clicker, 'emit');
    fixture.detectChanges();
    
    const buttonsGroup = fixture.debugElement.query(By.css('.btn-group'));
    component.buttonsGroupData.forEach(({ idButton }) => {
      const button = buttonsGroup.query(By.css(`#${idButton}`));
      button.nativeElement.click();
      expect(spy).toHaveBeenCalledWith(idButton);
    });
  });

});
