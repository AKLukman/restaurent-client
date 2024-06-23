const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto md:w-4/12 text-center my-8">
      <p className="text-[#D99904] mb-2">{subHeading}</p>
      <h3 className="border-y-4 text-4xl py-4 uppercase">{heading}</h3>
    </div>
  );
};

export default SectionTitle;
