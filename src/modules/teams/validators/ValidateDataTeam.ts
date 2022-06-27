const validateInitials = (initials: string) => {
	if(!initials) return false
	return initials.length === 3
}

const validateName = (name: string) => {
	if(!name) return false
	return name.length <= 25
}


export { validateInitials, validateName }


