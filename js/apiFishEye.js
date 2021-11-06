// GET THE DATA FROM api/database.json (PHOTOGRAPHERS & MEDIAS)
class ApiFishEye {
  async getDataFishEye() {
    let url = `/SerylLounis_5_28092021/api/database.json`;
    let response = await fetch(url);
    let data = await response.json();

    const dataPhotographers = [...data.photographers];
    const dataMedias = [...data.media];

    return {
      photographers: dataPhotographers,
      media: dataMedias,
    };
  }
}
export default ApiFishEye;
