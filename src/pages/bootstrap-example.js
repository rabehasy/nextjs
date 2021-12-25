import Layout, { siteTitle } from '../components/layout'

export default function BootstrapExample() {
    return (
        <Layout>

            <div className="dropdown m-3">
                <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    id="dropdownMenuButton1"
                    aria-expanded="false"
                >
                    Dropdown
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li>
                        <a className="dropdown-item" href="#">
                            Option 1
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                            Option 2
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                            Option 3
                        </a>
                    </li>
                </ul>
            </div>

        </Layout>
    )
}
