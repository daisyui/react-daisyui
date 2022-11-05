import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'

import * as React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'

import Textarea from './Textarea'
import Form from '../Form'

describe('Textarea', () => { 
    it('should render', () => {
        render(<Textarea data-testid="textarea"/>)
        expect(screen.getByTestId("textarea")).toBeInTheDocument()
    })

    it('should render disabled', () => { 
        render(<Textarea disabled data-testid="textarea"/>)
        expect(screen.getByTestId("textarea")).toBeDisabled()
    })

    it('should render with label', () => {
        render(
        <Form className="form-control">
            <Form.Label title="label text">
            <Textarea/>
            </Form.Label>
        </Form>)
        expect(screen.getByLabelText(/label text/i)).toBeInTheDocument();
    })

    it('should have placeholder', () => {
        render(
            <Textarea placeholder='textarea placeholder'/>
        )
        expect(screen.getByPlaceholderText('textarea placeholder')).toBeInTheDocument();
    })
 })