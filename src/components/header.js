import React from "react"
import { useTranslation } from "react-i18next"

const Header = () => {
  const { t, i18n } = useTranslation("common")

  return (
    <header>
      <div>
        <h1>
          {t("title")}
        </h1>
      </div>
    </header>
  )
}

Header.propTypes = {}

Header.defaultProps = {}

export default Header
