import '../styles/Error.css'

interface ErrorProps {
    error: string
}

export const Error = ({ error }: ErrorProps) => (
    <div className="error mt-3 text-center">
        <strong>{error}</strong>
    </div>
)