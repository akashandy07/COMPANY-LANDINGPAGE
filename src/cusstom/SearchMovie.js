import { useState, useMemo } from 'react'
import jobsData from '../jobs/Job'

// categories derived from your actual title suffixes
const ROLE_CATEGORIES = [
    'Developer', 'Engineer', 'Consultant', 'Analyst',
    'Designer', 'Administrator', 'Manager', 'Coordinator',
    'Writer', 'Executive', 'Recruiter'
]

export const useSearchMovie = () => {
    const [input, setInput] = useState('')
    const [checkRole, setCheckRole] = useState([])
    const [checkType, setCheckType] = useState([])
    const [checkExperience, setCheckExperience] = useState([])

    const jobTypes = useMemo(() => {
        return [...new Set(jobsData.map(item => item.type))]
    }, [])

    const experienceLevels = useMemo(() => {
        return [...new Set(jobsData.map(item => item.experience))]
    }, [])

    // only keep categories that actually match something in title
    const roleCategories = useMemo(() => {
        return ROLE_CATEGORIES.filter(category =>
            jobsData.some(item => item.title.includes(category))
        )
    }, [])

    const filteredData = useMemo(() => {
        const query = input.toLowerCase()

        return jobsData.filter(item => {
            const matchesSearch =
                item.title.toLowerCase().includes(query) ||
                item.location.toLowerCase().includes(query) ||
                item.requiredSkill.toLowerCase().includes(query)

            const matchesRole =
                checkRole.length === 0 ||
                checkRole.some(category => item.title.includes(category))

            const matchesType =
                checkType.length === 0 || checkType.includes(item.type)

            const matchesExperience =
                checkExperience.length === 0 || checkExperience.includes(item.experience)

            return matchesSearch && matchesRole && matchesType && matchesExperience
        })
    }, [input, checkRole, checkType, checkExperience])

    const makeHandleCheck = (setter) => (value) => {
        setter(prev =>
            prev.includes(value)
                ? prev.filter(v => v !== value)
                : [...prev, value]
        )
    }

    const handleCheckRole = makeHandleCheck(setCheckRole)
    const handleCheckType = makeHandleCheck(setCheckType)
    const handleCheckExperience = makeHandleCheck(setCheckExperience)

    return {
        input, setInput,
        checkRole, handleCheckRole, roleCategories,
        checkType, handleCheckType, jobTypes,
        checkExperience, handleCheckExperience, experienceLevels,
        filteredData
    }
}