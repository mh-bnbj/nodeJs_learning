class RobotModel {
    constructor(x, y, f) {
        this.pose = {
            x: x,
            y: y,
            f: f,
        }
    }

    validatePose(pose) {
        return (
            pose.x < 5 &&
            pose.x > -1 &&
            pose.y < 5 &&
            pose.y > -1 &&
            ['NORTH', 'SOUTH', 'WEST', 'EAST'].includes(pose.f)
        )
    }

    moveRobot() {
        const tempPose = Object.assign({}, this.pose)

        switch (this.pose.f) {
            case 'NORTH':
                tempPose.y++
                break
            case 'SOUTH':
                tempPose.y--
                break
            case 'EAST':
                tempPose.x++
                break
            case 'WEST':
                tempPose.x--
                break
        }

        if (this.validatePose(tempPose)) {
            this.pose = Object.assign({}, tempPose)
            return { error: false, value: this.pose }
        } else return { error: true, value: 'out of board' }
    }

    rotate(direction) {
        switch (this.pose.f) {
            case 'NORTH':
                this.pose.f = direction === 'LEFT' ? 'WEST' : 'EAST'
                break
            case 'SOUTH':
                this.pose.f = direction === 'LEFT' ? 'EAST' : 'WEST'
                break
            case 'EAST':
                this.pose.f = direction === 'LEFT' ? 'NORTH' : 'SOUTH'
                break
            case 'WEST':
                this.pose.f = direction === 'LEFT' ? 'SOUTH' : 'NORTH'
                break
        }

        return { error: false, value: this.pose }
    }

    runCommand(job, value) {
        switch (job) {
            case 'PLACE':
                if (this.validatePose(value)) {
                    this.pose = value
                    return { error: false, value: this.pose }
                } else {
                    return { error: true, value: 'out of board' }
                }

            case 'MOVE':
                return this.moveRobot()

            case 'LEFT':
            case 'RIGHT':
                return this.rotate(job)

            case 'REPORT':
                return { error: false, value: this.pose }

            default:
                return { error: true, value: 'not supported command' }
        }
    }
}

module.exports = RobotModel
