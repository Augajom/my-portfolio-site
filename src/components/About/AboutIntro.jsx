import { useTranslation } from "react-i18next";

function AboutIntro() {
  const { t } = useTranslation();

  return (
    <div id="introduction" className="bg-black p-6 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-orange-500 mb-6 md:text-5xl">
        {t("about.intro.title")}
      </h1>

      <p className="text-xl font-semibold text-white mb-2 md:text-2xl">
        {t("about.intro.greeting")} <span className="text-orange-500">{t("about.intro.name")}</span>
      </p>

      <p className="text-xl text-white/90 mb-2 md:text-2xl">
        {t("about.intro.study")}
      </p>

      <p className="text-xl text-white/90 mb-2 md:text-2xl">
        {t("about.intro.internship")}
      </p>

      <p className="text-white/80 mt-4 md:text-lg">
        {t("about.intro.goal")}
      </p>
    </div>
  )
}


export default AboutIntro