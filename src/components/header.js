import { Link } from "gatsby"
import React, { useContext } from "react"
import { AlternateLinksContext } from "./wrapWithI18nProvider"
import { useTranslation } from "react-i18next"

const Header = () => {
  const alternateLinks = useContext(AlternateLinksContext)
  const { t, i18n } = useTranslation("common")

  return (
    <header>
      <div>
        <div>
          <ul>
          {alternateLinks &&
            alternateLinks
              .map((link, i) => [
                <li key={i}>
                <Link to={link.path} hrefLang={link.language}>
                  {t(link.language)}
                </Link>
                </li>
              ])}
          </ul>
        </div>
        <h1>
          <Link to={"/" + i18n.language}>{t("title")}</Link>
        </h1>
      </div>
    </header>
  )
}

Header.propTypes = {}

Header.defaultProps = {}

export default Header
