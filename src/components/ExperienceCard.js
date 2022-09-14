import PropTypes from "prop-types";

function ExperienceCard({
    title,
    company,
    companyImageUrl,
    timeSpan,
    place,
    description
}) {
    return (
        <div className="flex py-4 space-x-3">
            <img className="w-12 h-12 mt-1" src={companyImageUrl} alt={company} />
            <div>
                <h2 className="text-lg font-medium">{title}</h2>
                <p className="text-sm">{company} - {place}</p>
                <p className="text-sm">{timeSpan}</p>
                <p className="mt-2 text-sm">{description}</p>
            </div>
        </div>
    );
}

ExperienceCard.propTypes = {
    title: PropTypes.string,
    company: PropTypes.string,
    companyImageUrl: PropTypes.string,
    place: PropTypes.string,
    timeSpan: PropTypes.string,
    description: PropTypes.string
};

export default ExperienceCard;
