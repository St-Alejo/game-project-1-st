import MobileControls from '../MobileControls';

describe('MobileControls', () => {
  let onUpMock, onDownMock, onLeftMock, onRightMock;
  let mobileControls;

  beforeEach(() => {
    // Crear funciones simuladas (mocks)
    onUpMock = jest.fn();
    onDownMock = jest.fn();
    onLeftMock = jest.fn();
    onRightMock = jest.fn();

    // Crear instancia del componente
    mobileControls = new MobileControls({
      onUp: onUpMock,
      onDown: onDownMock,
      onLeft: onLeftMock,
      onRight: onRightMock
    });

    // Eliminar elementos del DOM creados por defecto
    mobileControls.container = null;
    mobileControls.jumpButton = null;
  });

  afterEach(() => {
    // Limpiar el DOM y mocks
    mobileControls.destroy();
    jest.clearAllMocks();
  });

  test('updateDirections activa funciones de dirección correctamente', () => {
    // Paso previo: establecer todos en false
    mobileControls.updateDirections({ up: false, down: false, left: false, right: true });

    // Activar direcciones
    mobileControls.updateDirections({ up: true, down: true, left: true, right: false });

    expect(onUpMock).toHaveBeenCalledWith(true);
    expect(onDownMock).toHaveBeenCalledWith(true);
    expect(onLeftMock).toHaveBeenCalledWith(true);
    expect(onRightMock).toHaveBeenCalledWith(false);
  });

  test('simulateSpacebar modifica window.experience.keyboard.keys.space', () => {
    global.window.experience = {
      keyboard: {
        keys: {
          space: false
        }
      }
    };

    mobileControls.simulateSpacebar(true);
    expect(window.experience.keyboard.keys.space).toBe(true);

    mobileControls.simulateSpacebar(false);
    expect(window.experience.keyboard.keys.space).toBe(false);
  });
});
