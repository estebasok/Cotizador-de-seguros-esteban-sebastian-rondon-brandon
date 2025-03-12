
  function yearBudget(budget, diffYear) {
    return budget -= (budget * (diffYear * 3) / 100);
  }

  function brandBudget(budget, brand) {
    switch(brand) {
      case 'americano':
        return budget += (budget * 15 / 100);
        break;
      case 'europeo':
        return budget += (budget * 30 / 100);
        break;
      case 'asiatico':
        return budget += (budget * 5 / 100);
        break;
      default: break;
    }
  }

  function planBudget(budget, plan) {
    return (plan === 'basico')
             ? budget += (budget * 20 / 100)
             : ( (plan === 'completo')
                  ? budget += (budget * 50 / 100)
                  : 0 );
  }

export default function getFinalBudget(budget, brand, year, plan) {
  let finalBudget;
  let diffYear = new Date().getFullYear() - year;
  finalBudget = yearBudget(budget, diffYear);
  finalBudget = brandBudget(finalBudget, brand);
  finalBudget = planBudget(finalBudget, plan);
  return parseFloat(finalBudget).toFixed(2);
}