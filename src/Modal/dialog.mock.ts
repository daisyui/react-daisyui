/**
 * Mock implementation for HTMLDialogElement methods in Jest tests.
 *
 * This mock provides:
 * - show() and showModal() methods that set open=true
 * - close() method that sets open=false and fires 'close' event
 * - triggerCancel() method for testing cancel events (simulates ESC key)
 *
 * Usage in tests:
 * ```tsx
 * const dialog = screen.getByRole('dialog') as HTMLDialogElement
 * dialog.triggerCancel() // Simulates ESC key press
 * ```
 */

// Extend the HTMLDialogElement interface to include our custom method
declare global {
  interface HTMLDialogElement {
    triggerCancel(): void
  }
}

HTMLDialogElement.prototype.show = jest.fn(function mock(
  this: HTMLDialogElement
) {
  this.open = true
})

HTMLDialogElement.prototype.showModal = jest.fn(function mock(
  this: HTMLDialogElement
) {
  this.open = true
})

HTMLDialogElement.prototype.close = jest.fn(function mock(
  this: HTMLDialogElement
) {
  this.open = false
  // Fire the 'close' event
  this.dispatchEvent(new Event('close', { bubbles: true }))
})

// Helper function to manually trigger cancel event for testing
// This simulates what happens when ESC key is pressed
HTMLDialogElement.prototype.triggerCancel = jest.fn(function mock(
  this: HTMLDialogElement
) {
  this.open = false
  // Fire the 'cancel' event
  this.dispatchEvent(new Event('cancel', { bubbles: true }))
})

// Export to make this a module
export {}
