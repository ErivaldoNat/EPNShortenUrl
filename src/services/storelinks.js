export async function getlinksSave(key){
  const mylinks = await localStorage.getItem(key);

  let linksSave = JSON.parse(mylinks) || [];

  return linksSave;
}

export async function saveLink(key, newLink){
  let linkStored = await getlinksSave(key);

  const hasLink = linkStored.some(link => link.id === newLink.id);
  if(hasLink){
    console.log("Links existe déjà");
  }
  linkStored.push(newLink);
  await localStorage.setItem(key, JSON.stringify(linkStored));
  console.log("Link saved sucessfully");

}

export function deleteLinks (links, id){
  let myLinks = links.filter(item => {
    return(item.id !== id);
  })
  localStorage.setItem( '@allLinks', JSON.stringify(myLinks));
  console.log("Link deleted successfully");

  return myLinks;
}