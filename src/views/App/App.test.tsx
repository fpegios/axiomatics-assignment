import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import { dividerClasses } from '@mui/material'

const handleFileUploadChange = jest.fn()
const handleBackClick = jest.fn()
const mockUseHandlers = {
  handleFileUploadChange,
  handleBackClick,
}
jest.mock('./hooks/useHandlers', () => jest.fn(() => mockUseHandlers))

const mockUseLocalData = {
  treeData: null,
  setTreeData: jest.fn(),
}
jest.mock('./hooks/useHandlers', () => jest.fn(() => mockUseHandlers))

jest.mock('../../components/Navbar', () => () => <div>Navbar</div>)

test('renders learn react link', () => {
  render(<App />)
  expect(screen.getByText('Navbar')).toBeInTheDocument()
})
