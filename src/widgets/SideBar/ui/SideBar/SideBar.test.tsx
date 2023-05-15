import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation } from
    'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { SideBar } from 'widgets/SideBar/';

describe('Sidebar', () => {
    test('test sidebar toggle', () => {
        renderWithTranslation(<SideBar />);
        const toogleBtn = screen.getByTestId('sidebar-toggle');
        const sidebar = screen.getByTestId('sidebar');
        expect(sidebar).toBeInTheDocument();
        fireEvent.click(toogleBtn);
        expect(sidebar).toHaveClass('collapsed');
    });

    // test('test component with class', () => {
    //     render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
    //     expect(screen.getByText('TEST')).toHaveClass('clear');
    //     screen.debug();
    // });
});
