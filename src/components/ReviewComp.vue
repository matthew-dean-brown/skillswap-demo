<template>
    <div class="profile-wrap">
        <!-- Toolbar -->
        <div class="toolbar">
            <router-link class="btn ghost" :to="{ name: 'dashboard' }">Back to Dashboard</router-link>
        </div>

        <!-- Header: avatar | name+skills | contact -->
        <div class="header">
            <div class="avatar"><img :src="user?.image" alt=""></div>

            <div class="info-left">
                <div class="row"><span class="label">Name:</span><span>{{ user?.name || '-' }}</span></div>
                <div class="row"><span class="label">Skills:</span><span>{{ user?.skills?.join(', ') || '-' }}</span>
                </div>
            </div>

            <div class="info-right">
                <div class="row"><span class="label">Contact:</span></div>
                <div class="contact-line"><a :href="'mailto:'+user?.contact?.email+'&subject=SkillSwap&body=I%20would%20like%20to%20enquire%20about%20your%20skill%20on%20SkillSwap target=_top'"><i class="fa fa-envelope"></i> {{ user?.contact?.email || '-' }}</a></div>
                <div class="contact-line">{{ user?.contact?.phone || '-' }}</div>
            </div>
        </div>

        <div class="actions">
            <h4 class="pill" >Reviews</h4>
        </div>

        <div id="reviews" class="reviews-panel">
            <table v-if="user?.reviews?.length" class="reviews-table">
                <thead>
                    <tr>
                        <th>Reviewer</th>
                        <th>Rating</th>
                        <th>Review</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(r, i) in user.reviews" :key="i">
                        <td class="reviewer">{{ r?.name }}</td>
                        <td class="rating">{{ r?.rating }}/5</td>
                        <td class="text">“{{ r?.review }}”</td>
                    </tr>
                </tbody>
            </table>
            <div v-else class="empty">No reviews yet.</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "UserReviews",
    data() {
        return { user: null };
    },
    mounted() {
        this.user = this.$store.state.users[this.$route.params.index];
    },
    methods: {
    }
};
</script>

<style scoped>
.profile-wrap {
    background: #f6f7f8;
    border-radius: 12px;
    margin: 20px auto;
    padding: 24px;
    width: min(900px, 92vw);
    box-shadow: 0 2px 8px rgba(0, 0, 0, .15)
}

/* Toolbar */
.toolbar {
    display: flex;
    gap: 10px;
    margin-bottom: 10px
}

.btn {
    padding: 8px 14px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    transition: transform .06s ease, box-shadow .2s ease
}

.btn.back {
    background: #4caf50;
    color: #fff;
    box-shadow: 0 2px 0 #3f8e42
}

.btn.back:hover {
    transform: translateY(-1px)
}

.btn.ghost {
    background: #5a35f3;
    color: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .12);
    transition: 0.5s
}

.btn.ghost:hover {
    transform: translateY(-1px);
    background: white;
    color: black;
}

.header {
    display: grid;
    grid-template-columns: 100px 1fr 1fr;
    gap: 20px;
    align-items: center;
    padding: 8px 6px 18px
}

.avatar {
    width: 100px;
    height: 100px;
    border-radius: 999px;
    background: #fff;
    display: grid;
    place-items: center;
    color: #6b6bff;
    font-size: 14px;
    box-shadow: inset 0 0 0 2px #fff, 0 1px 3px rgba(0, 0, 0, .08)
}

.info-left .row,
.info-right .row {
    margin: 6px 0
}

.label {
    font-weight: 600;
    margin-right: 6px
}

.info-right .contact-line {
    margin: 2px 0
}

.actions {
    display: grid;
    place-items: center;
    margin: 6px 0 18px
}

.pill {
    padding: 10px 22px;
    border: none;
    border-radius: 999px;
    background: #fff;
    box-shadow: 0 4px 0 #bfbfbf, 0 6px 14px rgba(0, 0, 0, .12);
    font-weight: 600;
    transition: transform .06s ease, box-shadow .2s ease
}




.reviews-panel {
    background: #ece4e3;
    border-radius: 8px;
    padding: 16px;
    min-height: 140px
}

.reviews-table {
    width: 100%;
    border-collapse: collapse;
    background: #fff;
    border-radius: 8px;
    overflow: hidden
}

.reviews-table thead th {
    text-align: center;
    padding: 12px 14px;
    font-weight: 700;
    background: #f3f4f6;
    border-bottom: 1px solid #e5e7eb
}

.reviews-table tbody td {
    padding: 12px 14px;
    border-bottom: 1px solid #f0f0f0;
    vertical-align: top
}

.reviews-table tbody tr:last-child td {
    border-bottom: none
}

.reviewer {
    white-space: nowrap;
    font-weight: 600
}

.rating {
    width: 80px;
    white-space: nowrap
}

.text {
    color: #333
}

.empty {
    text-align: center;
    padding: 20px 8px;
    color: #555
}

@media (max-width:720px) {
    .header {
        grid-template-columns: 80px 1fr;
        grid-template-areas: "avatar info-left" "avatar info-right"
    }

    .avatar {
        width: 80px;
        height: 80px
    }

    .info-left {
        grid-area: info-left
    }

    .info-right {
        grid-area: info-right
    }
}
</style>
