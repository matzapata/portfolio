import PropTypes from "prop-types";

function EducationCard({
    institution,
    institutionImageUrl,
    title,
    timeSpan
}) {
    return (
        <div className="flex py-2 space-x-3">
            <img className="w-12 h-12 mt-1" src={institutionImageUrl} alt={institution} />
            <div>
                <h2 className="text-lg font-medium">{institution}</h2>
                <p className="text-sm">{title}</p>
                <p className="text-sm">{timeSpan}</p>
            </div>
        </div>
    );
}

EducationCard.propTypes = {
    title: PropTypes.string,
    institution: PropTypes.string,
    institutionImageUrl: PropTypes.string,
    timeSpan: PropTypes.string,
};

export default EducationCard;
