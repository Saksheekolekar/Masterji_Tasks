
function Footer() {
    const handleImageClick = () => {
        window.location.href = 'https://www.chaicode.com';
      };
    return(<>
    <div className="bg-transparent absolute md:bottom-4 md:right-20">
        <img src=".\chai.png" alt="chai"  onClick={handleImageClick} className="w-36 h-24 rounded" />
      </div>
    <h6>Thanks For Visiting</h6>
    </>)
}
export default Footer;