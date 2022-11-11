import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'

import * as React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'

import {CodeMockup} from './CodeMockup'

describe('codeMockup', ()=> {
    it('should render', () => {
        render(<CodeMockup data-testid="code-mockup"/>)
        expect(screen.getByTestId('code-mockup')).toBeInTheDocument();
    })

    it('should have three lines', () => {
        render(<CodeMockup data-testid="code-mockup">
            <CodeMockup.Line data-testid="code-line">first</CodeMockup.Line>
            <CodeMockup.Line data-testid="code-line">second</CodeMockup.Line>
            <CodeMockup.Line data-testid="code-line">third</CodeMockup.Line>
        </CodeMockup>)
        expect(screen.getAllByTestId('code-line')).toHaveLength(3)
        expect(screen.getByTestId('code-mockup').childNodes).toHaveLength(3)
    })

    it('should have no line prefix', () => {
        render(<CodeMockup>
            <CodeMockup.Line dataPrefix={false} data-testid="code-line"></CodeMockup.Line>
        </CodeMockup>)
        
        expect(getComputedStyle(screen.getByTestId('code-line'), ':before').getPropertyValue("content")).toEqual("")
    })  
})