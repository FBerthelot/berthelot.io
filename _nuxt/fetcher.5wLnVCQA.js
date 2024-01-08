import{i as d}from"./finalInvitations.data.YhMXLnf7.js";const r=o=>{const e=d.find(i=>i.id===o);if(!e)return;const n=e.people.length,t=e.children.length,a=n-t,s=n-(e.plus1Invited?1:0);return{...e,nbOfPeople:n,nbOfChildren:t,nbOfPeopleWithoutChildren:a,nbOfPeopleWithoutPlus1:s}},p=(o,e,n,t)=>{const a={fish:"du poisson",meat:"de la viande rouge",child:"le menu enfant."},s=`

🎉 Quelqu’un a répondu au formulaire d’invitation ! 🎉

💌 L’invitation **${o}** a eu comme réponse :

${n.attending.includes("cant")?"Ils ne peuvent pas venir.":`Ils viennent à : ${n.attending.join(", ")}.`}
${t.questionOnChildren&&n.children==="false"?"Les enfants ne viennent pas.":""}
${t.plus1Invited&&n.plus1==="no"?"Pas de plus 1.":""}

${n.attending.includes("cant")?"":e.map(i=>`
  - ${i} : mangera ${a[n[`meal-${i}`]]}.
`).join(`
`)}

${n.mealComment?`🍗 : "${n.mealComment}"`:""}

💬 : "${n.comment}"

<!here> il faut mettre à jour l’excel avant l’autodestruction de ce message !`;console.info(s),window.alert("Trop tard pour répondre !")};export{r as g,p as s};
