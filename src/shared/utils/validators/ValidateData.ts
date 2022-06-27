const validateInitials = (initials: string) => {
	if(!initials) return false
	return initials.length === 3
}

const validateName = (name: string) => {
	if(!name) return false
	return name.length <= 25
}

const numberTeamsInChampionship = (number_teams: number) => {
	if(
		number_teams === 4 || number_teams === 8 || number_teams === 16 ||
		number_teams === 32 || number_teams === 64 || number_teams === 128 ||
		number_teams === 256 || number_teams === 512 || number_teams === 1024 
	){
		return true
	} 
	else{
		return false
	}
}

export { validateInitials, validateName, numberTeamsInChampionship }


