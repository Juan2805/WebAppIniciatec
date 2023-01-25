const displayRules = () => {
    const displayRulesContainer = document.querySelectorAll('.display_rule')
    const hideRulesContainer = document.querySelectorAll('.hide_rule')
    const ruleContainer = document.querySelectorAll('.rule_container')

    displayRulesContainer.forEach(displayRule => {
        displayRule.addEventListener('click', event => {
            ruleContainer.forEach(rule => {
                if (event.target.alt == rule.id) {
                    document.getElementById(`${rule.id}`).classList.toggle('hidden')
                    hideRulesContainer.forEach(hideRule => {
                        hideRule.alt == rule.id ? hideRule.classList.toggle('hidden') : null
                        displayRule.classList.toggle('hidden')
                    })
                }
            })
        })
    })
    
    hideRulesContainer.forEach(hideRule => {
        hideRule.addEventListener('click', event => {
            ruleContainer.forEach(rule => {
                if (event.target.alt == rule.id) {
                    document.getElementById(`${rule.id}`).classList.toggle('hidden')
                    displayRulesContainer.forEach(displayRule => {
                        displayRule.alt == rule.id ? displayRule.classList.toggle('hidden') : null
                        hideRule.classList.toggle('hidden')
                    })
                }
            })
        })
    })
}

displayRules()