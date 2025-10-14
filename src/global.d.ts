declare namespace JSX {
  interface IntrinsicElements {
    'obc-main-engine': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      rpm?: number
      temperature?: number
      pressure?: number
      status?: string
    }
    // tambahkan komponen lain sesuai kebutuhan
  }
}